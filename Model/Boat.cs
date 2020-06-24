namespace BoatClub.Model
{
    public enum BoatStatus { Rented, ReadyToRent}
    public class Boat
    {
        public int BoatId { get; set; }
        public string Name { get; set; }    
        public string Image { get; set; }
        public double HourlyRate { get; set; }
        public User Owner { get; set; }
        public BoatStatus Status { get; set; }
        public bool Deleted { get; set; } 
    }
}