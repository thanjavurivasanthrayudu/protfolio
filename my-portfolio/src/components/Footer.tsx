export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-900/50 py-8 relative z-10 w-full mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} <span className="text-white font-medium">Thanjavuri Vasanth Rayudu</span>. All rights reserved.
                </p>
                <p className="text-slate-400 text-sm">
                    Designed & Developed by <span className="text-red-500 font-medium tracking-wide">Thanjavuri Vasanth Rayudu</span>
                </p>
            </div>
        </footer>
    );
}
