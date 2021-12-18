// import WordCloudMobile from "./WordCloudMobile";
// import WordCloud from "./WordCloud";
// import BarGraph from "./BarGraph";
// import PieChart from "./PieChart";
// import * as DATA from "./data";

const randColor = () => DATA.COLORS[Math.floor(Math.random() * DATA.COLORS.length)];

const RENDER_GRAPHS = () => {

  // document.querySelector("#loading").style.display = 'none';

  // ------------------------------- WORD CLOUDS

  new WordCloudMobile({
    title: "What words describe your work?",
    tag: ".graph-keywords-mobile",
    data: DATA.KEYWORDS,
    width: 500,
    height: 1300,
  }).render();

  new WordCloudMobile({
    title: "What words describe your work?",
    tag: ".graph-exhibition-contact-mobile",
    data: DATA.EXHIBITION_CONTACT,
    multiplier: 300,
    minSize: 12,
  }).render();

  new WordCloudMobile({
    title: "Do you have any final thoughts regarding this survey?",
    tag: ".final-thoughts-mobile",
    data: DATA.FINAL_THOUGHTS,
    multiplier: 15,
    minSize: 8,
    height: 1600,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for outstanding service to artists or communities this past year?",
    tag: ".negative-shoutout-mobile",
    data: DATA.NEGATIVE_SHOUTOUT,
    multiplier: 20,
    minSize: 14,
    height: 1000,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for outstanding service to artists or communities this past year?",
    tag: ".positive-shoutout-mobile",
    data: DATA.POSITIVE_SHOUTOUT,
    multiplier: 20,
    minSize: 14,
    height: 1000,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "What additional duties aside from teaching did you perform for your school or schools this past year?",
    tag: ".extra-duties-mobile",
    data: DATA.EXTRA_DUTIES,
    multiplier: 20,
    minSize: 14,
    height: 1000,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "What schools did you teach for this past year?",
    tag: ".schools-taught-at-mobile",
    data: DATA.SHOOLS_TAUGHT_AT,
    multiplier: 1,
    minSize: 14,
    height: 700,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "What are the most important benefits of your current city / neighborhood?",
    tag: ".city-benefits-mobile",
    data: DATA.CITY_BENEFITS,
    multiplier: 3,
    minSize: 8,
    height: 1400,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "What neighborhood and city did you live in at the end of 2016?",
    tag: ".previous-city-mobile",
    data: DATA.PREVIOUS_CITY,
    multiplier: 12,
    minSize: 8,
    height: 1200,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "What city / neighborhood do you live in?",
    tag: ".cities-neighborhoods-cloud-mobile",
    data: DATA.CITIES_NEIGHBORHOODS,
    multiplier: 12,
    minSize: 8,
    height: 1200,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "List any past degrees you've completed.",
    tag: ".past-degrees-mobile",
    data: DATA.PAST_DEGREES,
    multiplier: 5,
    minSize: 12,
    height: 1400,
    width: 400,
  }).render();

  new WordCloudMobile({
    title: "If you are currently a student what school do you attend?",
    tag: ".current-school-mobile",
    data: DATA.CURRENT_SCHOOL,
    multiplier: 1,
    minSize: 20,
    height: 900,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "What types of jobs did you work?",
    tag: ".job-types-mobile",
    data: DATA.JOB_TYPES,
    multiplier: 6.5,
    minSize: 12,
    height: 900,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "",
    tag: ".art-resources-mobile",
    data: DATA.ART_RESOURCES,
    multiplier: 1.5,
    minSize: 12,
    height: 900,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "",
    tag: ".social-media-negatives-mobile",
    data: DATA.SOCIAL_MEDIA_NEGATIVES,
    multiplier: 15,
    minSize: 14,
    height: 900,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "",
    tag: ".social-media-positives-mobile",
    data: DATA.SOCIAL_MEDIA_POSITIVES,
    multiplier: 6,
    minSize: 14,
    height: 900,
    width: 300,
  }).render();

  new WordCloudMobile({
    title: "",
    tag: ".sale-types-cloud-mobile",
    data: DATA.SALE_TYPES,
    multiplier: 3,
    minSize: 10,
    height: 650,
    width: 500,
  }).render();

  new WordCloudMobile({
    title: "",
    tag: ".studio-visit-sources-cloud-mobile",
    data: DATA.STUDIO_VISIT_SOURCES,
    multiplier: 2.5,
    minSize: 10,
    height: 1500,
    width: 500,
  }).render();

  new WordCloudMobile({
    title: "Who visited your studiothis past year?",
    tag: ".studio-visitors-cloud-mobile",
    data: DATA.STUDIO_VISITORS,
    multiplier: 2,
    minSize: 10,
    height: 700,
    width: 500,
  }).render();

  new WordCloudMobile({
    title: "What kinds of work did you sell?",
    tag: ".sales-mediums-cloud-mobile",
    data: DATA.SALES_MEDIUMS,
    multiplier: 3,
    minSize: 12,
    height: 700,
    width: 500,
  }).render();

  new WordCloudMobile({
    title: "Who did you sell work to?",
    tag: ".graph-buyers-mobile",
    data: DATA.BUYERS_CLOUD,
    multiplier: 1.5,
    minSize: 12,
    height: 800,
    width: 500,
  }).render();

  new WordCloudMobile({
    title: "What words describe your work?",
    tag: ".graph-gallery-spaces-mobile",
    data: DATA.EXHIBITION_SPACES,
    multiplier: 1.75,
    minSize: 12,
    width: 500,
    height: 800,
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-keywords",
    data: DATA.KEYWORDS,
    multiplier: 3.25,
    minSize: 6,
    width: 400,
    height: 1200,
  }).render();

  new WordCloud({
    title: "What words describe your work?",
    tag: ".graph-exhibition-contact",
    data: DATA.EXHIBITION_CONTACT,
    multiplier: 300,
    minSize: 12,
    width: 500,
  }).render();

  new WordCloud({
    title: "Do you have any final thoughts regarding this survey?",
    tag: ".final-thoughts",
    data: DATA.FINAL_THOUGHTS,
    multiplier: 15,
    minSize: 8,
    width: 500,
  }).render();

  new WordCloud({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for outstanding service to artists or communities this past year?",
    tag: ".negative-shoutout",
    data: DATA.NEGATIVE_SHOUTOUT,
    multiplier: 20,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "Are there any arts institutions, galleries etc. that you would like to anonymously cite for outstanding service to artists or communities this past year?",
    tag: ".positive-shoutout",
    data: DATA.POSITIVE_SHOUTOUT,
    multiplier: 20,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "What additional duties aside from teaching did you perform for your school or schools this past year?",
    tag: ".extra-duties",
    data: DATA.EXTRA_DUTIES,
    multiplier: 20,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "What schools did you teach for this past year?",
    tag: ".schools-taught-at",
    data: DATA.SHOOLS_TAUGHT_AT,
    multiplier: 1,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "What are the most important benefits of your current city / neighborhood?",
    tag: ".city-benefits",
    data: DATA.CITY_BENEFITS,
    multiplier: 3,
    minSize: 8,
    width: 500,
  }).render();

  new WordCloud({
    title: "What neighborhood and city did you live in at the end of 2016?",
    tag: ".previous-city",
    data: DATA.PREVIOUS_CITY,
    multiplier: 12,
    minSize: 8,
    width: 500,
  }).render();

  new WordCloud({
    title: "What city / neighborhood do you live in?",
    tag: ".cities-neighborhoods-cloud",
    data: DATA.CITIES_NEIGHBORHOODS,
    multiplier: 12,
    minSize: 8,
    width: 500,
  }).render();

  new WordCloud({
    title: "List any past degrees you've completed.",
    tag: ".past-degrees",
    data: DATA.PAST_DEGREES,
    multiplier: 5,
    minSize: 12,
    width: 500,
  }).render();

  new WordCloud({
    title: "If you are currently a student what school do you attend?",
    tag: ".current-school",
    data: DATA.CURRENT_SCHOOL,
    multiplier: 1,
    minSize: 20,
    width: 500,
  }).render();

  new WordCloud({
    title: "What types of jobs did you work?",
    tag: ".job-types",
    data: DATA.JOB_TYPES,
    multiplier: 6.5,
    minSize: 12,
    width: 500,
  }).render();

  new WordCloud({
    title: "",
    tag: ".art-resources",
    data: DATA.ART_RESOURCES,
    multiplier: 1.5,
    minSize: 12,
    width: 500,
  }).render();

  new WordCloud({
    title: "",
    tag: ".social-media-negatives",
    data: DATA.SOCIAL_MEDIA_NEGATIVES,
    multiplier: 15,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "",
    tag: ".social-media-positives",
    data: DATA.SOCIAL_MEDIA_POSITIVES,
    multiplier: 6,
    minSize: 14,
    width: 500,
  }).render();

  new WordCloud({
    title: "",
    tag: ".sale-types-cloud",
    data: DATA.SALE_TYPES,
    multiplier: 3,
    minSize: 10,
    width: 500,
    height: 1000
  }).render();

  new WordCloud({
    title: "",
    tag: ".studio-visit-sources-cloud",
    data: DATA.STUDIO_VISIT_SOURCES,
    multiplier: 1.5,
    minSize: 10,
    width: 500,
  }).render();

  new WordCloud({
    title: "Who visited your studio this past year?",
    tag: ".studio-visitors-cloud",
    data: DATA.STUDIO_VISITORS,
    multiplier: 2,
    minSize: 10,
    width: 500,
  }).render();

  new WordCloud({
    title: "What kinds of work did you sell?",
    tag: ".sales-mediums-cloud",
    data: DATA.SALES_MEDIUMS,
    multiplier: 2,
    minSize: 12,
    width: 500,
    height: 1000
  }).render();

  new WordCloud({
    title: "Who did you sell work to?",
    tag: ".graph-buyers",
    data: DATA.BUYERS_CLOUD,
    multiplier: 0.75,
    minSize: 12,
    width: 500,
  }).render();

  new WordCloud({
    title: "Where did you show work?",
    tag: ".graph-gallery-spaces",
    data: DATA.EXHIBITION_SPACES,
    multiplier: 0.8,
    minSize: 10,
    width: 400,
    height: 425,
    margin: {
      top: 0,
      bottom: 0,
      left: 200,
      right: 0
    }
  }).render();

  // ------------------------------- BAR GRAPHS

  new BarGraph({
    title: "What is your highest level of education?",
    tag: ".education-level",
    data: DATA.EDUCATION_LEVEL,
    angle: true,
    width: 600,
  }).render();

  new BarGraph({
    title: "What is your highest level of education?",
    tag: ".education-level-mobile",
    data: DATA.EDUCATION_LEVEL,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Did you claim any studio expenses?",
    tag: ".tax-expenses",
    data: DATA.TAX_EXPENSES,
    angle: true,
    width: 400,
  }).render();

  new PieChart({
    title: "Are you currently a student?",
    tag: ".current-student",
    data: DATA.CURRENT_STUDENT,
    angle: true,
    width: 400,
  }).render();

  new PieChart({
    title: "How many jobs did you apply for?",
    tag: ".job-app-count",
    data: DATA.JOB_APP_COUNT,
    angle: true,
    width: 400,
  }).render();

  new PieChart({
    title: "Did you apply for unemployment or food stamps?",
    tag: ".unemployment",
    data: DATA.UNEMPLOYMENT,
    angle: true,
    width: 400,
  }).render();

  new PieChart({
    title: "How many hours per studio day did you work?",
    tag: ".studio-hours",
    data: DATA.STUDIO_HOURS,
    angle: true,
    width: 400,
  }).render();

  new PieChart({
    title: "How many days per week did you work in your studio?",
    tag: ".studio-days",
    data: DATA.STUDIO_DAYS,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much did you make in job-related income?",
    tag: ".job-income",
    data: DATA.JOB_INCOME,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "What did your studio space cost per month?",
    tag: ".studio-price",
    data: DATA.STUDIO_PRICE,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How large is your current work space?",
    tag: ".studio-size",
    data: DATA.STUDIO_SIZE,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "What type of work space did you use this past year?",
    tag: ".studio-space-type",
    data: DATA.STUDIO_SPACE_TYPE,
    multiplier: .8,
    minSize: 14,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "What type of work space did you use this past year?",
    tag: ".studio-space-type-mobile",
    data: DATA.STUDIO_SPACE_TYPE,
    multiplier: .8,
    minSize: 14,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Were you paid for these extra duties?",
    tag: ".extra-duty-pay",
    data: DATA.EXTRA_DUTY_PAY,
    multiplier: .8,
    minSize: 14,
    angle: true,
    width: 400,
  }).render();


  // ------------------------------- PIE CHARTS

  new PieChart({
    title: "How many minutes did this survey take you?",
    data: DATA.SURVEY_TIME,
    tag: ".survey-time",
  }).render()

  new PieChart({
    title: "How many campuses did you teach at?",
    data: DATA.CAMPUSES_TAUGHT_COUNT,
    tag: ".campuses-taught-count",
  }).render()

  new PieChart({
    title: "How many classes did you teach per semester?",
    data: DATA.CLASSES_TAUGHT_COUNT,
    tag: ".classes-taught-count",
  }).render()

  new PieChart({
    title: "How many openings / receptions did you attend?",
    data: DATA.RECEPTION_COUNT,
    tag: ".reception-count",
  }).render()

  new PieChart({
    title: "How important was visiting galleries / museums?",
    data: DATA.GALLERY_PRIORITY,
    tag: ".gallery-priority",
  }).render()

  new PieChart({
    title: "Rating for your educational experience?",
    data: DATA.EDUCATION_EXPERIENCE_RATING,
    tag: ".education-experience-rating",
  }).render()

  new PieChart({
    title: "Did you sell any work online?",
    data: DATA.ANY_ONLINE_SALES,
    tag: ".any-online-sales",
  }).render()

  new PieChart({
    title: "Did you maintain a studio website in 2016?",
    tag: ".personal-website-2016",
    data: DATA.PERSONAL_WEBSITE_2016,
    angle: true,
    width: 400,
  }).render()


  new PieChart({
    title: "Were you a part of a union this past year?",
    data: DATA.UNION_MEMBER,
    tag: ".union-member",
    width: 400,
    angle: true,
  }).render()

  new PieChart({
    title: "Were your union benefits / advantages clear?",
    data: DATA.UNION_BENEFITS,
    tag: ".union-benefits",
    width: 400,
    angle: true,
  }).render()

  // ------------------------------- BAR GRAPHS

  new BarGraph({
    title: "Did your career suffer from discrimination?",
    data: DATA.DISCRIMITATION,
    tag: ".discrimination",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "Did you feel welcomed / embraced by the art world?",
    data: DATA.ART_WORLD_WELCOME,
    tag: ".art-world-welcome",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How were you treated by your schools?",
    data: DATA.TEACHING_ENVIRONMENT_RATING,
    tag: ".teaching-environment-rating",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How many galleries closed in your area?",
    data: DATA.CLOSED_GALLERIES,
    tag: ".closed-galleries",
    width: 400,
  }).render()

  new BarGraph({
    title: "How many new galleries opened in your area?",
    data: DATA.OPENED_GALLERIES,
    tag: ".opened-galleries",
    width: 400,
  }).render()

  new BarGraph({
    title: "How many art fairs / biennials did you attend?",
    data: DATA.ART_FAIR_COUNT,
    tag: ".fair-count",
    width: 400,
  }).render()

  new BarGraph({
    title: "How much was a monthly loan payment?",
    tag: ".student-loan-payment",
    data: DATA.STUDENT_LOAN_PAYMENT,
    angle: true,
    width: 400,
  }).render()

  new BarGraph({
    title: "How much do you owe in student loans?",
    tag: ".student-loans",
    data: DATA.STUDENT_LOANS,
    angle: true,
    width: 400,
  }).render()

  new BarGraph({
    title: "Did you maintain a studio website in 2019?",
    tag: ".personal-website",
    data: DATA.PERSONAL_WEBSITE,
    angle: true,
    width: 400,
  }).render()

  new BarGraph({
    title: "How well did your primary platform serve you?",
    tag: ".social-media-service-rating",
    data: DATA.SOCIAL_MEDIA_SERVICE_RATING,
    width: 400,
  }).render()

  new BarGraph({
    title: "Did you pay for soc.media promotion? Did it work?",
    tag: ".graph-paid-social-media",
    data: DATA.PAID_SOCIAL_MEDIA,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Did you use Instagram more or less than last year?",
    tag: ".instagram-more-less",
    data: DATA.INSTAGRAM_MORE_LESS,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How often did you make Instagram studio posts?",
    tag: ".graph-instagram-frequency",
    data: DATA.INSTAGRAM_FREQUENCY,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Did you use Facebook more or less than last year?",
    tag: ".graph-facebook-more-less",
    data: DATA.FACEBOOK_MORE_LESS,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How often did you make Facebook studio posts?",
    tag: ".graph-facebook-frequency",
    data: DATA.FACEBOOK_POST_FREQUENCY,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much of a priority was soc. media use?",
    tag: ".graph-social-media-priority",
    data: DATA.SOC_MEDIA_PRIORITY,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "Rate treatment from collectors / buyers.",
    tag: ".graph-collector-treatment",
    data: DATA.COLLECTOR_TREATMENT,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much work did you sell total?",
    tag: ".graph-sales-sum",
    data: DATA.SALES_SUM,
    angle: true,
    width: 400,
  }).render();

  new BarGraph({
    title: "What platforms did you sell work on?",
    tag: ".graph-sale-platforms",
    data: DATA.SALE_PLATFORMS,
    angle: true,
    width: 800,
  }).render();

  new BarGraph({
    title: "What platforms did you sell work on?",
    tag: ".graph-sale-platforms-mobile",
    data: DATA.SALE_PLATFORMS,
    angle: true,
    width: 800,
    height: 350,
  }).render();

  new BarGraph({
    title: "How many studio visits did you have?",
    data: DATA.VISIT_COUNT,
    tag: ".graph-visit-count",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How much of a priority were studio visits?",
    data: DATA.VISIT_PRIORITY,
    tag: ".graph-visit-priority",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How much of a priority was selling your work?",
    data: DATA.SELLLING_PRIORITY,
    tag: ".graph-selling-priority",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    title: "How much did you receive in grants?",
    data: DATA.GRANT_SUM,
    tag: ".graph-grant-sum",
    width: 400,
    angle: true,
  }).render()

  new PieChart({
    title: "How many grants did you recieve?",
    data: DATA.GRANT_COUNT,
    tag: ".graph-grant-count",
  }).render()

  new PieChart({
    title: "How many grants did you apply for?",
    data: DATA.GRANT_APP_COUNT,
    tag: ".graph-grant-app-count",
  }).render()

  new PieChart({
    title: "How many residencies did you attend?",
    data: DATA.RESIDENCY_COUNT,
    tag: ".graph-residency-count",
  }).render()

  new BarGraph({
    data: DATA.RESIDENCY_APP_COUNT,
    title: "How many residencies did you apply for?",
    tag: ".graph-residency-app-count",
    width: 400,
  }).render()

  new BarGraph({
    data: DATA.RESIDENCY_PRIORITY,
    title: "How much of a priority were residencies / grants?",
    tag: ".graph-residency-priority",
    width: 400,
    angle: true,
  }).render()

  new BarGraph({
    data: DATA.LEGAL_PAPERWORK,
    title: "Were you given any legal paperwork by gallerists etc?",
    tag: ".graph-legal-paperwork",
    width: 400,
    angle: true,
  }).render()

  new PieChart({
    title: "Did you have official gallery representation?",
    data: DATA.GALLERY_REPRESENTATION,
    tag: ".graph-gallery-representation",
  }).render();

  new PieChart({
    title: "How many art events did you help organize?",
    data: DATA.EVENT_ORGANIZATION,
    tag: ".graph-event-organization",
  }).render();

  new BarGraph({
    title: "How many group exhibitions were you in?",
    tag: ".graph-group-show-count",
    data: DATA.GROUP_EXHIBITIONS_COUNT,
    width: 400,
  }).render();

  new BarGraph({
    title: "What is your chosen gender identity?",
    tag: ".graph-gender",
    data: DATA.GENDER,
    width: 400,
  }).render();

  new BarGraph({
    title: "How many social media re-posts / features?",
    tag: ".graph-socialmedia-features",
    data: DATA.SOCMEDIA_FEATURES,
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How many times was your work written about?",
    tag: ".graph-publication-count",
    data: DATA.PUBLICATION_COUNT,
    width: 400,
  }).render();

  new BarGraph({
    title: "How much did you pay in application fees?",
    tag: ".graph-application-fees",
    data: DATA.APPLICATION_FEES,
    width: 400,
    angle: true,
  }).render();

  new BarGraph({
    title: "How many shows did you apply for?",
    tag: ".graph-show-applications",
    data: DATA.SHOW_APPLICATIONS,
    width: 400,
  }).render();

  new PieChart({
    title: "How many solo exhibitions were you in?",
    tag: ".graph-solo-show-count",
    data: DATA.SOLO_EXHIBITIONS_COUNT,
    width: 400,
  }).render();


  new BarGraph({
    title: "How much of a priority was exhibiting your work?",
    tag: ".graph-exhibitions-priority",
    data: DATA.EXHIBITIONS_PRIORITY,
    width: 400,
    angle: true
  }).render();

  new BarGraph({
    title: "What is your age?",
    tag: ".graph-age",
    data: DATA.AGE,
    width: 400,
  }).render();

  new BarGraph({
    title: "What is your race / ethnicity?",
    tag: ".graph-race",
    data: DATA.RACE,
    width: 400,
    angle: true,
  }).render();

  new PieChart({
    title: "Do you identify as LGBTQ+?",
    tag: ".graph-orientation",
    data: DATA.ORIENTATION,
    width: 400,
  }).render();

  new PieChart({
    title: "How did you hear about the survey?",
    tag: ".graph-found-survey",
    data: DATA.FOUND_SURVEY,
    width: 400,
  }).render();

  // document.querySelector("#loading").style.display = 'none';

}