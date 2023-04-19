import react from 'react';

useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        console.log(data); // or update state with data
      } catch (error) {
        console.error(error);
        // handle the error or update state to reflect the error
      }
    };
    fetchPosts();
  }, []);

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            

  export default Portfolio;

