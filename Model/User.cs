namespace BoatClub.Model
{
    public enum UserType { BoatOwner, Admin }
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public UserType Type { get; set; }
        public bool Deleted { get; set; }
    }
}