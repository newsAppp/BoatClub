using Microsoft.EntityFrameworkCore.Migrations;

namespace BoatClub.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Deleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Boat",
                columns: table => new
                {
                    BoatId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    HourlyRate = table.Column<double>(nullable: false),
                    OwnerUserId = table.Column<int>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    Deleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Boat", x => x.BoatId);
                    table.ForeignKey(
                        name: "FK_Boat_User_OwnerUserId",
                        column: x => x.OwnerUserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BoatTransaction",
                columns: table => new
                {
                    BoatTransactionId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BoatId = table.Column<int>(nullable: false),
                    RentTo = table.Column<string>(nullable: true),
                    RentByUserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatTransaction", x => x.BoatTransactionId);
                    table.ForeignKey(
                        name: "FK_BoatTransaction_User_RentByUserId",
                        column: x => x.RentByUserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Boat_OwnerUserId",
                table: "Boat",
                column: "OwnerUserId");

            migrationBuilder.CreateIndex(
                name: "IX_BoatTransaction_RentByUserId",
                table: "BoatTransaction",
                column: "RentByUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Boat");

            migrationBuilder.DropTable(
                name: "BoatTransaction");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
