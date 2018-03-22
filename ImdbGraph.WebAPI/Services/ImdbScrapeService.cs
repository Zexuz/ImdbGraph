using System.Collections.Generic;
using System.Threading.Tasks;
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
            var mainSite = new SiteService(_baseUrl, $"/title/{imdbId}");
            var document = await mainSite.Scrape();
            var serie = await _seriesParser.ParserFromImdbDocument(document);

            serie.Seasons = await AddSeasonToSeries(imdbId);

            return serie;
        }

        private async Task<List<Season>> AddSeasonToSeries(string imdbId)
        {
            var seasons = new List<Season>();
            
            var seasonSite = new SiteService(_baseUrl, $"/title/{imdbId}/episodes/?season=1");
            var seasonDocument = await seasonSite.Scrape();

            seasons.Add(await GetSeason(seasonDocument));


            for (var i = 2; i <= _seriesParser.GetSeasonNr(seasonDocument).Count - 1; i++)
            {
                seasons.Add(await GetSeason(imdbId, i));
            }

            return seasons;
        }

        private async Task<Season> GetSeason(string imdbId, int nr)
        {
            var seasonSite = new SiteService(_baseUrl, $"/title/{imdbId}/episodes/?season={nr}");
            var seasonDocument = await seasonSite.Scrape();
            return await _seriesParser.GetSeason(seasonDocument);
        }
        private async Task<Season> GetSeason(IDocument document)
        {
            return await _seriesParser.GetSeason(document);
        }
    }
}