// console.log("Hello to my news Website");

// initialize the news api parameters
let source = "bbc-news";
let apiKey = "3ffc2af4179146f1823673c1855adebe";

// grab news container
let newsAccordion = document.getElementById("newsAccordion");

// creating an AJAX GET request
// const xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
//   true
// );

// // to do when response is ready
// xhr.onload = function () {
//   if (this.status == 200) {
//     let json = JSON.parse(this.responseText);
//     let articles = json.articles;
//     console.log(articles);
//     let ele = "";
//     articles.forEach((element, index) => {
//       ele += `
//                     <div class="accordion-item">
//                         <h2 class="accordion-header" id="heading${index}">
//                             <button
//                             class="accordion-button collapsed"
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#collapse${index}"
//                             aria-expanded="true"
//                             aria-controls="collapse${index}"
//                             >
//                             <b>News ${index+1}:</b>  ${element["title"]}
//                             </button>
//                         </h2>
//                         <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
//                             <div class="accordion-body">
//                             <strong>${element["content"]}</strong>.
//                             <a href="${element["url"]}" target=_blank>Read more here</a>
//                             </div>
//                         </div>
//                     </div>
// `;
//     });
//     newsAccordion.innerHTML = ele;
//   } else {
//     console.log("some error occured");
//   }
// };
// xhr.send();



// using Fetch Api

fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`).then((response)=>{
  return response.json();
}
).then((data)=>{
  console.log(data)
  let ele="";
  data['articles'].forEach((element, index) => {
    ele += `
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="heading${index}">
                          <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse${index}"
                          aria-expanded="true"
                          aria-controls="collapse${index}"
                          >
                          <b>News ${index+1}:</b>  ${element["title"]}
                          </button>
                      </h2>
                      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                          <div class="accordion-body">
                          <strong>${element["content"]}</strong>.
                          <a href="${element["url"]}" target=_blank>Read more here</a>
                          </div>
                      </div>
                  </div>
`;
  });
  newsAccordion.innerHTML = ele;
})
