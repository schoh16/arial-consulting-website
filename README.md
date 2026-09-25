# Arial Consulting Firm Website

A modern, professional website for Arial Consulting Firm - Enterprise IT Solutions.

## Services

- **Systems Administration** - Comprehensive server and infrastructure management
- **DevOps Automation** - CI/CD pipelines, containerization, and orchestration
- **DevSecOps** - Integrated security into your development pipeline
- **Notary Services** - Content signing and verification solutions
- **AI Integration** - Seamless integration of AI and ML models
- **AI Security** - Advanced threat detection and AI-powered security operations

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/schoh16/arial-consulting-website.git

# Navigate to the project directory
cd arial-consulting-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── About.tsx         # About section
│   ├── CaseStudies.tsx   # Case studies
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── styles/
│   └── *.module.css      # Component styles
└── public/               # Static assets
```

## Features

- ✨ Modern, responsive design
- 🎨 Gradient UI with smooth animations
- 📱 Mobile-friendly layout
- ♿ Accessible components
- 🚀 Fast performance with Next.js
- 📧 Contact form integration ready
- 🔍 SEO optimized

## Customization

### Update Company Information

Edit the following files to customize with your company details:

- `app/layout.tsx` - Update metadata
- `components/Contact.tsx` - Update contact information
- `components/Footer.tsx` - Update footer content

### Colors and Branding

The site uses a blue/purple gradient color scheme. To customize:

1. Edit the gradient colors in `app/globals.css`
2. Update component-specific styles in `styles/*.module.css`

## Deployment

### GitHub Pages

1. Update `next.config.js` for GitHub Pages export
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Other Platforms

- Vercel: `vercel deploy`
- Netlify: Connect GitHub repo and configure build settings
- Traditional hosting: `npm run build` and deploy the `out` directory

## License

MIT License - feel free to use this template for your project.

## Support

For questions or issues, please create an issue in the repository.
