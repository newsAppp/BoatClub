namespace BoatClub.Model
{
    public class BoatTransaction
    {
        public int BoatTransactionId { get; set; }
        public int BoatId { get; set; }
        public string RentTo { get; set; }
        public User RentBy { get; set; }

    }
}