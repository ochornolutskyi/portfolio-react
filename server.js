const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 5000;

// const mongoUri = `mongodb+srv://futureInPast:futureInPast0607@projectsdb.fy9ai.mongodb.net/projectsDB?retryWrites=true&w=majority`;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client/build")));

let employee = {
   info: {
      name: "name",
      surname: "surname",
      about: ` Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde! `,
      styles: [
         "example",
         "example",
         "example",
         "example",
         "example",
         "example",
         "example",
         "example",
      ],
   },
   projects: [
      {
         category: "horeca",
         title: "view from the top",
         description: `Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde!  Lorem ipsum dolor sit amet consectetur, adipisicing.
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde!  Lorem ipsum dolor sit amet consectetur, adipisicing.
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde!  Lorem ipsum dolor sit amet consectetur, adipisicing
                 `,
         images: [],
         params: {
            Width: "50m",
            Height: "3.5m",
            value3: "value3",
            value4: "value4",
            value5: "value5",
            value6: "value6",
            value7: "value7",
            value8: "value8",
         },
         id: "view from the top",
      },
      {
         category: "private",
         title: "chill house",
         description: `Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde! 2`,
         images: [],
         params: {
            value1: "value1",
            value2: "value2",
            value3: "value3",
            value4: "value4",
            value5: "value5",
            value6: "value6",
         },
         id: "chill house",
      },
      {
         category: "horeca",
         title: "sea food",
         description: `Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Consequuntur dolorem sint dolores obcaecati ullam
                  est perferendis sequi non. Incidunt nostrum, praesentium
                  ea placeat voluptatibus ipsa excepturi ex sequi ratione
                  unde! 3`,
         images: [],
         params: {
            value1: "value1",
            value2: "value2",
            value3: "value3",
            value4: "value4",
            value5: "value5",
            value6: "value6",
         },
         id: "sea food",
      },
   ],
};

//DOWNLOAD ALL IMAGES
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(
   __dirname,
   `client/src/img/employees/${
      employee.info.name + "-" + employee.info.surname
   }/`
);
//passsing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
   //handling error
   if (err) {
      return console.log("Unable to scan directory: " + err);
   }
   employee.info.photo =
      `img/employees/${employee.info.name + "-" + employee.info.surname}/` +
      files.filter((file) => file.includes("photo"))[0];
   //listing all files using forEach
   files.map((file) => {
      if (file === "projects") {
         fs.readdir(directoryPath + file, (err, projectsFolder) => {
            if (err) {
               return console.log("Unable to scan directory: " + err);
            }
            return projectsFolder.forEach((projectFolder) => {
               let projectData = employee.projects.filter(
                  (projectEmployee) =>
                     projectEmployee.title.replace(/\s/g, "-") === projectFolder
               )[0];
               fs.readdir(
                  directoryPath + file + "/" + projectFolder,
                  (err, images) => {
                     if (err) {
                        return console.log("Unable to scan directory: " + err);
                     }
                     projectData.preview = `img/employees/${
                        employee.info.name + "-" + employee.info.surname
                     }/projects/${projectFolder}/${images[0]}`;
                     projectData.images = images.map((image) => {
                        return `img/employees/${
                           employee.info.name + "-" + employee.info.surname
                        }/projects/${projectFolder}/${image}`;
                     });
                  }
               );
            });
         });
      }
   });
});

app.get("/api/*", (req, res) => {
   res.send(employee);
});

app.get("*", (req, res) => {
   res.sendfile(path.join(__dirname, "client/build", "index.html"));
});

/* async function start(){
   try {
      await mongoose.connect(mongoUri,{
       useNewUrlParser: true ,
       useUnifiedTopology: true
      })
      app.listen(PORT, () => {
         console.log(`App has been started on ${PORT} port...`);
      });
   } catch (error) {
      console.log(error)
   }
}

start() */

app.listen(PORT, () => {
   console.log(`Server has been started on ${PORT} port...`);
});
