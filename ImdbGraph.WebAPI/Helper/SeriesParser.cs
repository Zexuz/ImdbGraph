using System.Threading.Tasks;
using AngleSharp.Dom;
using AngleSharp.Extensions;
using ImdbGraph.Models;

namespace ImdbGraph.WebAPI.Helper
{
    public class SeriesParser : ISeriesParser
    {
        public Task<Serie> ParserFromImdbDocument(IDocument document)
        {
            var serie = new Serie
            {
                Bio = document.QuerySelector("#pagecontent div.media div.media-body p.plot-description").Text().Trim()
            };



            return Task.FromResult(serie);
        }
    }
}