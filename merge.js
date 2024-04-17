// Define an async function to handle the dynamic import
async function mergePDFs(pdfPath1, pdfPath2) {
  try {
    // Use dynamic import to import the module
    const PDFMerger = await import('pdf-merger-js');
    
    // Create a new instance of PDFMerger
    const merger = new PDFMerger.default();

    // Add PDF files for merging using the provided file paths
    await merger.add(pdfPath1);
    await merger.add(pdfPath2);

    // Save the merged PDF
    await merger.save('public/merged.pdf');

    console.log("PDF files merged successfully.");
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
}

// Export the mergePDFs function
module.exports = { mergePDFs };
