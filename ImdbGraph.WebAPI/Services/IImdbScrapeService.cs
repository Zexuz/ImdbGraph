using System.Threading.Tasks;
using ImdbGraph.Models;

namespace ImdbGraph.WebAPI.Services
{
    public interface IImdbScrapeService
    {
        Task<Serie> FromImdbId(string imdbId);
    }
}