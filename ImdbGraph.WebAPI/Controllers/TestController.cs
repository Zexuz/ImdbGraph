using ImdbGraph.WebAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ImdbGraph.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        private readonly ITestService _testService;

        public TestController(ITestService testService)
        {
            _testService = testService;
        }
        
        [HttpGet("verify")]
        public IActionResult Verify(string a)
        {
            return Ok(_testService.Test(a));
        }
    }
}