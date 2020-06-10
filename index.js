const recommendationList = document.querySelector('.recommendations');

//set up recs
const setupRecommendations = (data) => {
  let html = '';
  data.forEach(doc => {
    const recommendation = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${recommendation.title} </div>
       <div class="collapsible-body white"> ${recommendation.content} </div>
      </li>
    `;
   html += li;
  });
  recommendationList.innerHTML = html

}




document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });