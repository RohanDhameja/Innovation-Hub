import React, { useState } from 'react';
import { Play, Users, Target, BookOpen, Video, ChevronRight, ExternalLink, Mail, Phone, MapPin, Send } from 'lucide-react';

type Tab = 'home' | 'blog' | 'videos' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: Target },
    { id: 'blog' as Tab, label: 'Blog', icon: BookOpen },
    { id: 'videos' as Tab, label: 'Videos', icon: Video },
    { id: 'contact' as Tab, label: 'Contact', icon: Mail },
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about robotics and AI innovation'
    },
    {
      name: 'Sarah Chen',
      role: 'Research Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in machine learning and automation'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Design Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creating intuitive interfaces for complex systems'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Robotics in Education',
      excerpt: 'Exploring how robotics can transform learning experiences and prepare students for tomorrow\'s challenges.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Building Sustainable Tech Solutions',
      excerpt: 'How we\'re integrating environmental consciousness into our technology development process.',
      date: 'March 8, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'AI and Human Collaboration',
      excerpt: 'Understanding the balance between artificial intelligence and human creativity in modern innovation.',
      date: 'February 28, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const videoCategories = [
    {
      title: 'Robotics',
      videos: [
        {
          title: 'Autonomous Navigation System',
          description: 'Building a robot that can navigate complex environments',
          thumbnail: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '12:34',
          link: 'https://youtube.com/watch?v=example1'
        },
        {
          title: 'Robotic Arm Programming',
          description: 'Programming precise movements for manufacturing applications',
          thumbnail: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '18:22',
          link: 'https://youtube.com/watch?v=example2'
        },
        {
          title: 'Advanced Sensor Integration',
          description: 'Integrating multiple sensors for enhanced robot perception',
          thumbnail: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '15:45',
          link: 'https://youtube.com/watch?v=example3'
        },
        {
          title: 'Robot Vision Systems',
          description: 'Computer vision techniques for robotic applications',
          thumbnail: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '22:18',
          link: 'https://youtube.com/watch?v=example4'
        }
      ]
    },
    {
      title: 'Programming',
      videos: [
        {
          title: 'React Best Practices',
          description: 'Advanced patterns for building scalable React applications',
          thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '25:17',
          link: 'https://youtube.com/watch?v=example5'
        },
        {
          title: 'Machine Learning Basics',
          description: 'Introduction to ML algorithms and their practical applications',
          thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '32:45',
          link: 'https://youtube.com/watch?v=example6'
        },
        {
          title: 'Python for Data Science',
          description: 'Essential Python libraries and techniques for data analysis',
          thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '28:33',
          link: 'https://youtube.com/watch?v=example7'
        },
        {
          title: 'API Development with Node.js',
          description: 'Building robust REST APIs using Node.js and Express',
          thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '35:12',
          link: 'https://youtube.com/watch?v=example8'
        }
      ]
    },
    {
      title: 'Innovation',
      videos: [
        {
          title: 'Design Thinking Process',
          description: 'How to approach complex problems with creative solutions',
          thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '14:28',
          link: 'https://youtube.com/watch?v=example9'
        },
        {
          title: 'Startup Innovation Strategies',
          description: 'Key strategies for fostering innovation in startup environments',
          thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '19:55',
          link: 'https://youtube.com/watch?v=example10'
        },
        {
          title: 'Future Tech Trends',
          description: 'Exploring emerging technologies and their potential impact',
          thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '26:41',
          link: 'https://youtube.com/watch?v=example11'
        }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (you could add a toast notification here)
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const renderHome = () => (
    <div className="space-y-20">
      {/* Hero Section with Video */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Innovating for a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Better Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Join our mission to create groundbreaking technology solutions that bridge the gap between innovation and real-world impact.
              </p>
              <button className="group flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe technology should serve humanity, not the other way around. Our initiatives focus on creating sustainable, accessible, and impactful solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Pushing boundaries with cutting-edge technology and creative problem-solving approaches.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Building strong partnerships and fostering teamwork to achieve extraordinary results.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating meaningful change that benefits communities and drives progress forward.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to make a difference through technology and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderBlog = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thoughts, ideas, and discoveries from our journey in technology and innovation.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                <span>Read More</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Video Library</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Educational content covering robotics, programming, and innovation techniques.
        </p>
      </div>
      
      <div className="space-y-16">
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              <span className="text-gray-500 font-medium">{category.videos.length} videos</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {category.videos.slice(0, 2).map((video, videoIndex) => (
                <a 
                  key={videoIndex} 
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{video.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>
                </a>
              ))}
            </div>
            {category.videos.length > 2 && (
              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mx-auto group">
                  <span>View all {category.videos.length} videos</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question, collaboration idea, or just want to connect? We'd love to hear from you.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@innovationhub.com</p>
                  <p className="text-gray-600">partnerships@innovationhub.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Innovation Drive</p>
                  <p className="text-gray-600">Tech Valley, CA 94025</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
            <p className="text-gray-600 mb-4">
              We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Usually responds within a few hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Innovation Hub</span>
            </div>
            
            <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        {activeTab === 'home' && renderHome()}
        {activeTab === 'blog' && renderBlog()}
        {activeTab === 'videos' && renderVideos()}
        {activeTab === 'contact' && renderContact()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">Innovation Hub</span>
            </div>
            <p className="text-gray-400">© 2024 Innovation Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;