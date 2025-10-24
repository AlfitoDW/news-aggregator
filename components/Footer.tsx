export default function Footer() {
    return (
        <footer className="bg-white border-t mt-8">
            <div className="container mx-auto text-center py-6 text-s text-gray-600">
                © {new Date().getFullYear()} News Aggregator. All rights reserved.
            </div>
        </footer>
    );
}