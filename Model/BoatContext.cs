using Microsoft.EntityFrameworkCore;

namespace BoatClub.Model
{
    public class BoatContext : DbContext {
        public BoatContext () {

        }
        public BoatContext (DbContextOptions<BoatContext> option) : base (option) {

        }

        public DbSet<Boat> Boat { get; set; }
        public DbSet<BoatTransaction> BoatTransaction { get; set; }
        //public DbSet<User> User { get; set; }
        

        protected override void OnConfiguring (DbContextOptionsBuilder options) {
            if (!options.IsConfigured) {
                //options.UseSqlServer (Program.ConnectionString);
            }
        }
    }
}