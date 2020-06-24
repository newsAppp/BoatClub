using System.Threading.Tasks;
using BoatClub.DTO;
using BoatClub.Services;
using Microsoft.AspNetCore.Mvc;

namespace BoatClub.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class BoatRegistrationController : ControllerBase {
        private readonly IBoatRegisterService register;
        public BoatRegistrationController (IBoatRegisterService register) {
            this.register = register;
        }

        [HttpPost]
        public async Task<ActionResult<BoatRegister>> Post (BoatRegister req) {
            await register.Add (req);
            return CreatedAtAction ("Created", req);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete (int id) {
            await register.Remove (id);
            return Accepted ();
        }

    }
}