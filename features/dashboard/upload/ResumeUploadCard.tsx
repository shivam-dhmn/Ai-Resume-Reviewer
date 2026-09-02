"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { CloudUpload, FileText, X, Zap } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ResumeUploadCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateFile = (selectedFile: File) => {
    if (selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return false;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File size must be 5MB or less.");
      return false;
    }

    return true;
  };

  const handleFile = (selectedFile: File) => {
    setError("");
    setSuccess("");

    if (!validateFile(selectedFile)) {
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    handleFile(selectedFile);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) {
      return;
    }

    handleFile(droppedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF resume first.");
      return;
    }

    setIsUploading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch("/api/resumes/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong while uploading.",
        );
      }

      setSuccess("Resume uploaded successfully.");
      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      console.log("Uploaded resume:", data.resume);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while uploading.",
      );
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError("");
    setSuccess("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center transition sm:p-8 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50"
        }`}
      >
        {!file ? (
          <>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <CloudUpload className="h-6 w-6 text-blue-600" />
            </div>

            <h2 className="text-lg font-semibold text-slate-900">
              Drag & Drop PDF
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              or click to browse from your device
            </p>

            <span className="mt-4 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
              PDF only, max 5MB
            </span>
          </>
        ) : (
          <>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>

            <h2 className="max-w-full truncate px-4 text-lg font-semibold text-slate-900">
              {file.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                removeFile();
              }}
              className="mt-4 flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
            >
              <X className="h-4 w-4" />
              Remove
            </button>
          </>
        )}
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {success && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600">
          {success}
        </p>
      )}

      <button
        type="button"
        onClick={handleUpload}
        disabled={isUploading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isUploading ? "Uploading..." : "Start AI Analysis"}

        {!isUploading && <Zap className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default ResumeUploadCard;