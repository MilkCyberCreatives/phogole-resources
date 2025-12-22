import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-secondary text-white/90">
      <div
        className="
          mx-auto max-w-6xl px-4 py-2 text-[13px]
          flex flex-col gap-2
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
          <Link
            href="tel:+27837127329"
            className="inline-flex items-center gap-2 hover:text-white"
            aria-label="Call Phogole Resources"
          >
            <Phone className="h-4 w-4 text-brand-primary" />
            <span>083 712 7329</span>
          </Link>

          <Link
            href="mailto:info@phogoleresources.co.za"
            className="inline-flex items-center gap-2 hover:text-white"
            aria-label="Email Phogole Resources"
          >
            <Mail className="h-4 w-4 text-brand-primary" />
            <span>info@phogoleresources.co.za</span>
          </Link>

          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-primary" />
            <span>Driekop, 1129</span>
          </span>
        </div>

        {/* RIGHT / CENTER ON MOBILE */}
        <div
          className="
            text-white/70
            text-center
            sm:text-right
          "
        >
          est. 2024
        </div>
      </div>
    </div>
  );
}
