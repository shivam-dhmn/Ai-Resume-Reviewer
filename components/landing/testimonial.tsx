import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          {/* Stars */}

          <div className="flex gap-1 text-blue-600">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-blue-600 text-blue-600"
              />
            ))}
          </div>

          {/* Review */}

          <p className="mt-6 text-sm italic leading-7 text-slate-600">
            "The clarity and speed are unmatched. It stripped away the
            fluff and highlighted my executive experience perfectly.
            Landed interviews within a week."
          </p>

          {/* Divider */}

          <div className="my-6 h-px bg-slate-200" />

          {/* User */}

          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-full bg-blue-100" />

            <div>
              <h4 className="font-semibold text-slate-900">
                Sarah Jenkins
              </h4>

              <p className="text-sm text-slate-500">
                VP of Operations
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;