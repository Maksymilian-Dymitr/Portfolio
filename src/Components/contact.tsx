import { contactMedia } from "@/icons";
import { Link } from "./link";
export function Contact() {
  return (
    <div className="pt-10">
      <div
        className="
        p-4 bg-[#1e1e1f] rounded-2xl border border-white/5
        flex justify-around gap-5"
      >
        <Link src="https://github.com/Maksymilian-Dymitr" media={contactMedia.github}/>
        <Link src="mailto:maksymilian.dymitr@gmail.com" media={contactMedia.email}/>
        <Link src="https://www.linkedin.com/in/maksymilian-dymitr/" media={contactMedia.linkedin}/>
        
      </div>
    </div>
  );
}
