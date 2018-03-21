using System;
using System.Linq;
using System.Threading.Tasks;
using AngleSharp;
using AngleSharp.Dom;
using ImdbGraph.Models;
using ImdbGraph.WebAPI.Helper;

namespace ImdbGraph.WebAPI.Services
{
    public class ImdbScrapeService : IImdbScrapeService
    {
        private readonly ISeriesParser _seriesParser;

        private readonly string _baseUrl;

        public ImdbScrapeService(ISeriesParser seriesParser)
        {
            _seriesParser = seriesParser;
            _baseUrl = "https://m.imdb.com";
        }
        
        public async Task<Serie> FromImdbId(string imdbId)
        {
            var site = new Site(_baseUrl,$"/title/{imdbId}");
            var document = await site.Scrape();
            var serie = await _seriesParser.ParserFromImdbDocument(document);

            return serie;
        }
        
    }

    public class Site
    {
        public string BaseUrl { get; }
        public string Path    { get; }

        public Site(string baseUrl, string path)
        {
            if(baseUrl.Last() == '/' && path[0] == '/')
                throw new ArgumentException("'/' on both baseUrl and path");
            
            if(baseUrl.Last() != '/' && path[0] != '/')
                throw new ArgumentException("Missing '/' on either baseUrl or path");
            
            BaseUrl = baseUrl;
            Path = path;
        }


        public async Task<IDocument> Scrape()
        {
            var config = Configuration.Default.WithDefaultLoader();
            var document = await BrowsingContext.New(config).OpenAsync(BaseUrl + Path);

            return document;


// This CSS selector gets the desired content
//            var cellSelector = "tr.vevent td:nth-child(3)";
// Perform the query to get all cells with the content
//            var cells = document.QuerySelectorAll(cellSelector);
// We are only interested in the text - select it with LINQ
//            var titles = cells.Select(m => m.TextContent);
        }
    }
}