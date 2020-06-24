using System.Linq;
using System.Threading.Tasks;
using BoatClub.DTO;
using BoatClub.Model;

namespace BoatClub.Services
{
    public class BoatRegisterService : IBoatRegisterService
    {
        private readonly BoatContext context;
        public BoatRegisterService(BoatContext context)
        {   
            this.context = context;
        }

        public async Task Add(BoatRegister req)
        {            
            context.Boat.Add(new Boat{
                BoatId = req.Id,
                HourlyRate = req.HourlyRate,
                Image = req.Image,
                Status = BoatStatus.ReadyToRent,
                Name = req.Name
            });
            await context.SaveChangesAsync();
        }

        // public Task Add(BoatRegister req)
        // {
        //     throw new System.NotImplementedException();
        // }

        public async Task Remove(int BoatId)
        {            
            var boat = context.Boat.Where(b => b.BoatId == BoatId).FirstOrDefault();
            if(boat != null) boat.Deleted = true;
            await context.SaveChangesAsync();
        }

        // Task IBoatRegisterService.Remove(int BoatId)
        // {
        //     throw new System.NotImplementedException();
        // }
    }
}