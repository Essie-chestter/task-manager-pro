
import React from 'react';
import { usePosts } from '@/hooks/usePosts';
import { Search, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const PostsList: React.FC = () => {
  const {
    posts,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    totalPosts
  } = usePosts();

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="p-8 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Error Loading Posts</h2>
          <p className="text-gray-600 dark:text-gray-300">{error}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Blog Posts</h1>
        <p className="text-gray-600 dark:text-gray-300">Discover interesting articles and stories</p>
      </div>

      <Card className="p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search posts by title or content..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          />
        </div>
        {totalPosts > 0 && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Found {totalPosts} post{totalPosts !== 1 ? 's' : ''}
          </p>
        )}
      </Card>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {posts.map((post, index) => (
              <Card 
                key={post.id} 
                hover 
                className="p-6 h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      Post #{post.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 line-clamp-4">
                    {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Author ID: {post.userId}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostsList;
