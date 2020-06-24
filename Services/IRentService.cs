using System.Threading.Tasks;
using BoatClub.DTO;

namespace BoatClub.Services {
    public interface IRentService {
        public Task Rent (BoatRent req);
        public Task Return (int transactionId);
    }
}