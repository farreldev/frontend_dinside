$(function() {
   var best_tags = [
        {text: "Bumn", weight: 72, link: "https://facebook.github.io/react/"},
        {text: "Beras", weight: 48, link: "https://facebook.github.io/react/"},
        {text: "Daya Beli", weight: 24, link: "https://facebook.github.io/react/"},
        {text: "Reshuffle", weight: 58,link: "https://facebook.github.io/react/"},
        {text: "Pertumbuhan Ekonomi", weight: 38, link: "https://facebook.github.io/react/"},
        {text: "Fintech", weight: 35, link: "https://facebook.github.io/react/"},
        {text: "Maritim", weight: 55, link: "https://facebook.github.io/react/"},
        {text: "Bisnis", weight: 55, link: "https://facebook.github.io/react/"},
        {text: "Infrastruktur", weight: 30, link: "https://facebook.github.io/react/"},
        {text: "Pertambangan", weight: 38, link: "https://facebook.github.io/react/"},
        {text: "Analisis", weight: 25, link: "https://facebook.github.io/react/"},
        {text: "Bursa", weight: 72, link: "https://facebook.github.io/react/"},
        {text: "Migas", weight: 50, link: "https://facebook.github.io/react/"},
        {text: "CPO", weight: 36, link: "https://facebook.github.io/react/"},
        {text: "Finansial", weight: 44, link: "https://facebook.github.io/react/"},
        {text: "Bursa", weight: 40, link: "https://facebook.github.io/react/"},
        {text: "Daya Beli", weight: 48, link: "https://facebook.github.io/react/"},
        {text: "UKM", weight: 45, link: "https://facebook.github.io/react/"},
    ];

     // jQCloud call method
     $("#txtCloud").jQCloud(best_tags);

    // xdshoft;
    jQuery('#startDate, #endDate, #highlightDate').datetimepicker();
})