function Navbar({ isMenuOpen, setIsMenuOpen, activeTab, setActiveTab }) {
  return React.createElement("nav", {
    className: `fixed w-full z-50 transition-all duration-300 ${isMenuOpen ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`
  },
    React.createElement("div", { className: "container mx-auto px-4 flex justify-between items-center" },
      React.createElement("div", { className: "flex items-center space-x-2" },
        // Замена текстового логотипа на изображение
        React.createElement("img", {
          src: "assets/logo.png",
          alt="Crypto Lab Logo",
          className="w-16 h-16 object-cover rounded-full"
        }),
        React.createElement("span", { className: "text-xl font-bold tracking-tight" }, "Crypto Lab")
      ),
      React.createElement("div", { className: "hidden md:flex items-center space-x-8" },
        React.createElement("button", { onClick: () => setActiveTab('about'), className: `hover:text-purple-400 transition-colors ${activeTab === 'about' ? 'text-purple-400' : ''}` }, "About"),
        React.createElement("button", { onClick: () => setActiveTab('tokens'), className: `hover:text-purple-400 transition-colors ${activeTab === 'tokens' ? 'text-purple-400' : ''}` }, "Tokens"),
        React.createElement("button", { onClick: () => setActiveTab('roadmap'), className: `hover:text-purple-400 transition-colors ${activeTab === 'roadmap' ? 'text-purple-400' : ''}` }, "Roadmap"),
        React.createElement("button", { onClick: () => setActiveTab('team'), className: `hover:text-purple-400 transition-colors ${activeTab === 'team' ? 'text-purple-400' : ''}` }, "Team"),
        React.createElement("button", { onClick: () => setActiveTab('faq'), className: `hover:text-purple-400 transition-colors ${activeTab === 'faq' ? 'text-purple-400' : ''}` }, "FAQ")
      ),
      React.createElement("button", {
        className: "md:hidden text-white",
        onClick: () => setIsMenuOpen(!isMenuOpen)
      },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          React.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
          })
        )
      )
    ),
    isMenuOpen && React.createElement("div", { className: "md:hidden bg-black/95 backdrop-blur-md mt-2 pb-4 animate-fadeIn" },
      React.createElement("div", { className: "container mx-auto px-4 flex flex-col space-y-3 pt-4" },
        React.createElement("button", {
          onClick: () => {
            setActiveTab('about');
            setIsMenuOpen(false);
          },
          className: `py-2 hover:text-purple-400 transition-colors ${activeTab === 'about' ? 'text-purple-400' : ''}`
        }, "About"),
        React.createElement("button", {
          onClick: () => {
            setActiveTab('tokens');
            setIsMenuOpen(false);
          },
          className: `py-2 hover:text-purple-400 transition-colors ${activeTab === 'tokens' ? 'text-purple-400' : ''}`
        }, "Tokens"),
        React.createElement("button", {
          onClick: () => {
            setActiveTab('roadmap');
            setIsMenuOpen(false);
          },
          className: `py-2 hover:text-purple-400 transition-colors ${activeTab === 'roadmap' ? 'text-purple-400' : ''}`
        }, "Roadmap"),
        React.createElement("button", {
          onClick: () => {
            setActiveTab('team');
            setIsMenuOpen(false);
          },
          className: `py-2 hover:text-purple-400 transition-colors ${activeTab === 'team' ? 'text-purple-400' : ''}`
        }, "Team"),
        React.createElement("button", {
          onClick: () => {
            setActiveTab('faq');
            setIsMenuOpen(false);
          },
          className: `py-2 hover:text-purple-400 transition-colors ${activeTab === 'faq' ? 'text-purple-400' : ''}`
        }, "FAQ")
      )
    )
  );
}