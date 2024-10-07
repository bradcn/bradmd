export const fetchmdfiles = async (page: string): Promise<string> => {
    try {
      const response = await fetch(`/pages/${page}.md`);
  
      // Check if the response is OK, otherwise throw an error
      if (!response.ok) {
        throw new Error('File not found');
      }
  
      // If found, return the markdown content
      const content = await response.text();
      return content;
    } catch (error) {
      // If an error occurs (like file not found), load the 404.md page
      const errorResponse = await fetch('/pages/404.md');
      
      if (!errorResponse.ok) {
        return '# 404 - Page Not Found\n\nThe 404 page is missing too!';
      }
  
      // Return the 404 page content
      const errorContent = await errorResponse.text();
      return errorContent;
    }
  };