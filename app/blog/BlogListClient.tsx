// app/blog/BlogListClient.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { getAssetUrl } from "@/lib/contentfulUtils";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/footer-section";

interface BlogListClientProps {
  posts: any[];
  includes: any;
}

export default function BlogListClient({ posts, includes }: BlogListClientProps) {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const featuredImgId = featuredPost?.fields?.blogBanner?.sys?.id;
  const featuredImageUrl = getAssetUrl(featuredImgId, includes);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />
      
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6"
          >
            BLOG
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent"
          >
            Ideas to level-up your freelance game
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore expert tips and insights to improve customer engagement.
          </motion.p>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="relative h-80 md:h-full overflow-hidden">
                <img
                  src={featuredImageUrl}
                  alt={featuredPost.fields.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 md:p-12">
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  MUST READ
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {featuredPost.fields.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featuredPost.fields.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>
                      {new Date(featuredPost.fields.publishingDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>10 min read</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.fields.urlSlug}`}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:gap-4 transition-all"
                  >
                    Read Article <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ALL BLOG POSTS GRID */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post: any, index: number) => {
              const imgId = post.fields.blogBanner?.sys?.id;
              const imgUrl = getAssetUrl(imgId, includes);

              return (
                <motion.div
                  key={post.sys.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.fields.urlSlug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl overflow-hidden border border-gray-200 bg-white cursor-pointer shadow-md hover:shadow-2xl transition-all h-full flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={imgUrl}
                          alt={post.fields.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                          {post.fields.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                          {post.fields.description}
                        </p>

                        <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>
                              {new Date(post.fields.publishingDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want more insights?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter for weekly tips and updates.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Subscribe Now
          </button>
        </div>
      </section>
      <FooterSection />

    </div>
  );
}