import swaggerAutogen from "swagger-autogen";
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/pets.js", "./routes/tutors.js"];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  import("./server.js");
});
