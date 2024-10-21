import swaggerAutogen from "swagger-autogen";
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/petsRouter.js", "./routes/tutorsRouter.js"];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  import("./server.js");
});
