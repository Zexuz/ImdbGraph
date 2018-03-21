using System.Threading.Tasks;
using ImdbGraph.WebAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ImdbGraph.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class ImdbController : Controller
    {
        private readonly IImdbScrapeService _imdbScrapeService;

        public ImdbController(IImdbScrapeService imdbScrapeService)
        {
            _imdbScrapeService = imdbScrapeService;
        }
        
        [HttpGet("scrape/{id}")]
        public async Task<IActionResult> Verify(string id)
        {
            return Ok(await _imdbScrapeService.FromImdbId(id));
        }
    }
}