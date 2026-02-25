export const HomePage = () => {
    return (
        <div className="p-8 pt-[68px]  gap-4 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Let's spotHub your business: Brand it, Design it, Automate it, Build it – So smart, you deserve that.</h1>
            <p className="mb-8">Your hub for graphics, web design, and AI automation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Widget Pictures - Replace src with actual URLs or assets */}
                <div>
                <h2 className="text-2xl">AI Chatbot Widget</h2>
                <img src="https://example.com/chatbot-widget.jpg" alt="AI Chatbot" className="w-full" />
                <p>Engage customers 24/7 with smart bots.</p>
                </div>
                <div>
                <h2 className="text-2xl">CRM Dashboard</h2>
                <img src="https://example.com/crm-dashboard.jpg" alt="CRM Dashboard" className="w-full" />
                <p>Manage leads and automate workflows.</p>
                </div>
                <div>
                <h2 className="text-2xl">Graphic Design Tool</h2>
                <img src="https://example.com/graphic-widget.jpg" alt="Graphic Design" className="w-full" />
                <p>Create stunning visuals effortlessly.</p>
                </div>
            </div>

        </div>
  );
}