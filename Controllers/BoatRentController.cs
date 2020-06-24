using System.Threading.Tasks;
using BoatClub.DTO;
using BoatClub.Services;
using Microsoft.AspNetCore.Mvc;

namespace BoatClub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoatRentController: ControllerBase
    {
        private readonly IRentService rent;

        public BoatRentController(IRentService rent)
        {
            this.rent = rent;
        }

        [HttpPost]
        public async Task<ActionResult<BoatRent>> Post (BoatRent req) {
            await rent.Rent (req);
            return Created ("BoatRent", req);
        }

        [HttpPost("return/{id:int}")]
        public async Task<ActionResult> PostReturn (int id) {
            await rent.Return(id);
            return Accepted ();
        }
        
    }
}