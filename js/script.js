//subscription drop down list
var subTypeElement = document.querySelector("#subscription");
//duration drop down list
var subDurationElement = document.querySelector("#months");
//result - where the cost of subscription will appear
var result = document.querySelector(".result");
//default vlaue for subscription drop down list
var subType = "basic";
//default value for duration drop down list
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
