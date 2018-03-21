using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            var mainSite = new SiteService(_baseUrl,$"/title/{imdbId}");
            var document = await mainSite.Scrape();
            var serie = await _seriesParser.ParserFromImdbDocument(document);
            serie.Seasons = await LookUpSeriesSeason(imdbId);

            return serie;
        }
        
        private async Task<List<Season>> LookUpSeriesSeason(string imdbId)
        {
            var seasonSite = new SiteService(_baseUrl,$"/title/{imdbId}/episodes/?season=1");
            var seasonDocument = await seasonSite.Scrape();
            return _seriesParser.GetSeasonNr(seasonDocument).Select(nr => new Season
            {
                Nr = nr
            }).ToList();
        }
        
    }
}