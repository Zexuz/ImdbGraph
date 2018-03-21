using System.Threading.Tasks;
using AngleSharp.Dom;
using ImdbGraph.Models;

namespace ImdbGraph.WebAPI.Helper
{
    public interface ISeriesParser
    {
        Task<Serie> ParserFromImdbDocument(IDocument document);
    }
}