using System.Threading.Tasks;
using BoatClub.DTO;

namespace BoatClub.Services {
    public interface IBoatRegisterService {
        public Task Add (BoatRegister req);

        public Task Remove (int BoatId);
    }
}