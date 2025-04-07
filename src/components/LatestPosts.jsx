import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  };

const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay: 0.2
        },
    },
};

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- CONFIGURATION ---
  const mediumUsername = 'patrykrogedu';
  const numberOfPosts = 3;
  // -------------------

  const mediumRssFeed = `https://medium.com/feed/@${mediumUsername}`;
  const rss2jsonApiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssFeed)}`;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(rss2jsonApiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === 'ok' && data.items) {
          const sortedPosts = data.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          setPosts(sortedPosts.slice(0, numberOfPosts)); 
        } else {
          throw new Error(data.message || 'Failed to fetch posts from RSS feed');
        }
      } catch (err) {
        console.error("Failed to fetch Medium posts:", err);
        setError(err.message);
        setPosts([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [rss2jsonApiUrl]);

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper to extract image from description (basic example)
  // Note: This is fragile. Medium's HTML structure might change.
  // rss2json often provides a 'thumbnail' field which is preferred.
  const getImageUrl = (item) => {
    if (item.thumbnail && typeof item.thumbnail === 'string' && item.thumbnail.startsWith('http')) {
        return item.thumbnail;
    }
    const match = item.description?.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null; 
  };


  return (
    <div id="blog" className="bg-black text-neutral-300 py-16 sm:py-24 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center"
          variants={itemVariants}
        >
          LATEST POSTS
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          className="w-20 h-1 mx-auto bg-red-600 mb-12"
          variants={lineVariants}
          style={{ originX: 0.5 }}
        ></motion.div>

        {/* Posts Grid / List */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" 
            variants={sectionVariants}
        >
          {loading && <p className="text-center col-span-full">Loading posts...</p>}
          {error && <p className="text-center text-red-500 col-span-full">Error loading posts: {error}</p>}
          {!loading && !error && posts.length === 0 && (
            <p className="text-center col-span-full text-neutral-400">No posts found.</p>
          )}

          {!loading && !error && posts.map((post) => {
            const imageUrl = getImageUrl(post);
            return (
              <motion.a
                key={post.guid || post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-red-900/40 transform hover:-translate-y-1 transition-all duration-300 flex flex-col" 
                variants={itemVariants}
                whileHover="hover"
              >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="" 
                        className="w-full h-48 object-cover mb-5 rounded-md" 
                        loading="lazy"
                    />
                )}
                 {!imageUrl && ( 
                    <div className="w-full h-48 bg-neutral-700 mb-5 rounded-md flex items-center justify-center">
                        <span className="text-neutral-500 text-sm">No Image Available</span>
                    </div>
                )}
                {/* Content within card */}
                <div className="flex flex-col flex-grow"> {/* Added flex-grow here */}
                    <h3 className="text-xl font-semibold text-white mb-2 leading-snug line-clamp-3">
                        {post.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4"> {/* Adjusted margin */}
                        {formatDate(post.pubDate)}
                    </p>

                    {/* Updated Category Pills Styling */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                            {post.categories.slice(0, 3).map(cat => (
                                <span
                                    key={cat}
                                    className="text-xs bg-neutral-700 text-neutral-300 px-3 py-1 rounded-md"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

         {!loading && !error && posts.length > 0 && (
            <div
                className="text-center mt-12 text-white"
            >
                <a
                    href={`https://medium.com/@${mediumUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 hover:underline transition-colors"
                >
                    View all posts on Medium →
                </a>
            </div>
         )}

      </motion.div>
    </div>
  );
};

export default LatestPosts;