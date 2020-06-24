using System.Linq;
using System.Threading.Tasks;
using BoatClub.DTO;
using BoatClub.Model;

namespace BoatClub.Services
{
    public class RentService : IRentService
    {
        private readonly BoatContext context;
        public RentService(BoatContext context)
        {   
            this.context = context;
        }
        public async Task Rent(BoatRent req)
        {         
            var boat = context.Boat.Where(b => b.BoatId == req.BoatId).FirstOrDefault();  
            boat.Status = BoatStatus.Rented; 
            context.BoatTransaction.Add(new BoatTransaction{
                BoatId = req.BoatId,
                RentTo = req.CustomerName                
            });
            context.SaveChanges();
        }
        public async Task Return(int transactionId)
        {
            var transaction = context.BoatTransaction.Where(t => t.BoatTransactionId == transactionId).FirstOrDefault();
            if(transaction != null)
            {
                var boat = context.Boat.Where(b => b.BoatId == transaction.BoatId).FirstOrDefault();
                boat.Status = BoatStatus.ReadyToRent;
                //transaction.RentBy = userId;
            }
            context.SaveChanges();
        }

        
    }
}