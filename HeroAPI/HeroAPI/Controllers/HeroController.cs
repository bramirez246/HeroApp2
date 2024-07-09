using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Hero>>> GetAllHeroes()
        {
            return new List<Hero> 
            { 
                new Hero 
                {
                    Name = "Deadpool",
                    FirstName = "Wade",
                    LastName = "Wilson",
                    Birthplace = "Canada",
                    Universe = "Marvel",
                    IsFavorite = true,
                } 
            };
        }
    }
}
