using System.Collections.Generic;
using System.Threading.Tasks;
using AngleSharp.Dom;
using ImdbGraph.Models;

namespace ImdbGraph.WebAPI.Helper
{
    public interface ISeriesParser
    {
        Task<Serie> ParserFromImdbDocument(IDocument document);
        List<int> GetSeasonNr(IDocument document);
        Task<Season> GetSeason(IDocument document);
    }
}