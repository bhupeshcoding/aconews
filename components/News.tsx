// "use client";
// import { useState, useEffect } from "react";

// interface Article {
//   title: string;
//   description: string;
//   content: string;
//   url: string;
//   image: string;
//   publishedAt: string;
//   source: {
//     name: string;
//     url: string;
//   };
// }

// const News = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(10);
//   const [error, setError] = useState<string | null>(null);

//   const articlesPerPage = 10;

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage: number) => prevPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage: number) => prevPage - 1);
//     }
//   };

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     const apiKey = "6815fea636c2645b3b297642ff628b7e";
//     const category = "general";
//     const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=${articlesPerPage}&page=${currentPage}&apikey=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.articles) {
//           setArticles(data.articles);
//           setTotalPages(Math.ceil(data.totalArticles / articlesPerPage));
//         } else {
//           setError("No news articles found.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(
//           "An error occurred while fetching news. Please try again later."
//         );
//       });
//   }, [currentPage, articlesPerPage]);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {error ? (
//           <p className="col-span-full text-red-500">{error}</p>
//         ) : (
//           articles.map((article) => (
//             <div
//               key={article.url}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <div className="p-4">
//                 <h5 className="text-lg font-bold mb-2">{article.title}</h5>
//                 {article.image && (
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-48 object-cover mb-4"
//                   />
//                 )}
//                 <p className="text-gray-600 text-sm line-clamp-3">
//                   {article.description}
//                 </p>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline mt-2 inline-block"
//                 >
//                   Read More
//                 </a>
//                 <div className="mt-2 text-gray-500 text-sm">
//                   {article.source.name && <span>By {article.source.name}</span>}
//                   <span className="ml-2">
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-4">
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
//           <button
//             key={number}
//             onClick={() => paginate(number)}
//             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
//               currentPage === number ? "bg-blue-700" : ""
//             }`}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;

// // "use client";
// // import { useState, useEffect } from "react";

// // // Define the Article interface
// // interface Article {
// //   title: string;
// //   description: string;
// //   content: string;
// //   url: string;
// //   image: string;
// //   publishedAt: string;
// //   source: {
// //     name: string;
// //     url: string;
// //   };
// // }

// // const News = () => {
// //   // State variables with types
// //   const [articles, setArticles] = useState<Article[]>([]);
// //   const [currentPage, setCurrentPage] = useState<number>(1);
// //   const [totalPages, setTotalPages] = useState<number>(1); // Initialize to 1
// //   const [error, setError] = useState<string | null>(null);

// //   const articlesPerPage = 10;

// //   const handleNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage((prevPage: number) => prevPage + 1);
// //     }
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage((prevPage: number) => prevPage - 1);
// //     }
// //   };

// //   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// //   useEffect(() => {
// //     const apiKey = "6815fea636c2645b3b297642ff628b7e"; // Replace with your actual API key or environment variable
// //     const category = "general";
// //     const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=${articlesPerPage}&page=${currentPage}&apikey=${apiKey}`;

// //     fetch(apiUrl)
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Network response was not ok");
// //         }
// //         return response.json();
// //       })
// //       .then((data: any) => {
// //         // Add type assertion here
// //         if (data.articles) {
// //           setArticles(data.articles);
// //           setTotalPages(Math.ceil(data.totalArticles / articlesPerPage));
// //         } else {
// //           setError("No news articles found.");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //         if (error.message === "Network response was not ok") {
// //           setError(
// //             "Unable to connect to the news service. Please check your internet connection."
// //           );
// //         } else {
// //           setError(
// //             "An error occurred while fetching news. Please try again later."
// //           );
// //         }
// //       });
// //   }, [currentPage, articlesPerPage]);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {error ? (
// //           <p className="col-span-full text-red-500">{error}</p>
// //         ) : (
// //           articles.map((article) => (
// //             <div
// //               key={article.url}
// //               className="bg-white rounded-lg shadow-md overflow-hidden"
// //             >
// //               <div className="p-4">
// //                 <h5 className="text-lg font-bold mb-2">{article.title}</h5>
// //                 {article.image && (
// //                   <img
// //                     src={article.image}
// //                     alt={article.title}
// //                     className="w-full h-48 object-cover mb-4"
// //                   />
// //                 )}
// //                 <p className="text-gray-600 text-sm line-clamp-3">
// //                   {article.description}
// //                 </p>
// //                 <a
// //                   href={article.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-blue-500 hover:underline mt-2 inline-block"
// //                 >
// //                   Read More
// //                 </a>
// //                 <div className="mt-2 text-gray-500 text-sm">
// //                   {article.source.name && <span>By {article.source.name}</span>}
// //                   <span className="ml-2">
// //                     {new Date(article.publishedAt).toLocaleDateString()}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {/* Pagination Controls */}
// //       <div className="flex justify-center mt-4">
// //         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
// //           <button
// //             key={number}
// //             onClick={() => paginate(number)}
// //             className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${
// //               currentPage === number ? "bg-blue-700" : ""
// //             }`}
// //           >
// //             {number}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// echo "# aconews" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bhupeshcoding/aconews.git
// git push -u origin main

// …or push an existing repository from the command line
// git remote add origin https://github.com/bhupeshcoding/aconews.git
// git branch -M main
// git push -u origin main

// // export default News;

"use client";

import { useState, useEffect } from "react";

interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const articlesPerPage = 10;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const apiKey = "6815fea636c2645b3b297642ff628b7e"; // Access environment variable
    const category = "general";
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=${articlesPerPage}&page=${currentPage}&apikey=${apiKey}`;

    if (apiKey) {
      // Only fetch if the API key is available
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.articles) {
            setArticles(data.articles);
            setTotalPages(Math.ceil(data.totalArticles / articlesPerPage));
          } else {
            setError("No news articles found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          if (error.message === "Network response was not ok") {
            setError(
              "Unable to connect to the news service. Please check your internet connection."
            );
          } else {
            setError(
              "An error occurred while fetching news. Please try again later."
            );
          }
        });
    } else {
      setError("API key is missing. Please check your environment variables.");
    }
  }, [currentPage, articlesPerPage]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {error ? (
          <p className="col-span-full text-red-500">{error}</p>
        ) : (
          articles.map((article) => (
            <div
              key={article.url}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">{article.title}</h5>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Read More
                </a>
                <div className="mt-2 text-gray-500 text-sm">
                  {article.source.name && <span>By {article.source.name}</span>}
                  <span className="ml-2">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
