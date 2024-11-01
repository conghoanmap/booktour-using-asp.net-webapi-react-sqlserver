using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class itinerary3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DepartureDate_Tours_TourId",
                table: "DepartureDate");

            migrationBuilder.DropForeignKey(
                name: "FK_Itinerary_Tours_TourId",
                table: "Itinerary");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Itinerary",
                table: "Itinerary");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DepartureDate",
                table: "DepartureDate");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "15ace81f-68f4-4973-9ee1-d333e9bf0caf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6699e8d7-cc90-4a18-ab77-ee51652b8b15");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "810ce20c-1b35-4668-95e4-9c6c6e027e0c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd5fdeaa-4308-4df4-83bf-17a7ac113b42");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f33ecfb3-37b1-4032-95f3-a0183df4740a");

            migrationBuilder.RenameTable(
                name: "Itinerary",
                newName: "Itineraries");

            migrationBuilder.RenameTable(
                name: "DepartureDate",
                newName: "DepartureDates");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Itineraries",
                table: "Itineraries",
                columns: new[] { "TourId", "Day" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_DepartureDates",
                table: "DepartureDates",
                columns: new[] { "TourId", "DepartureDay" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "18f677b1-e651-4002-80ee-e0fb487bf93f", null, "FlightManager", "Flight Manager" },
                    { "1eae9f78-75ec-4996-a1c5-9649591ca723", null, "TourManager", "Tour Manager" },
                    { "8652e6d3-7fbb-40bf-ae67-072c5499c9cb", null, "Admin", "Admin" },
                    { "9bb7d159-7e2d-49d3-a3d8-58c7786ac54b", null, "Customer", "Customer" },
                    { "b4673085-9d1e-428c-9f88-d800c9d60da7", null, "HotelManager", "Hotel Manager" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_DepartureDates_Tours_TourId",
                table: "DepartureDates",
                column: "TourId",
                principalTable: "Tours",
                principalColumn: "TourId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Itineraries_Tours_TourId",
                table: "Itineraries",
                column: "TourId",
                principalTable: "Tours",
                principalColumn: "TourId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DepartureDates_Tours_TourId",
                table: "DepartureDates");

            migrationBuilder.DropForeignKey(
                name: "FK_Itineraries_Tours_TourId",
                table: "Itineraries");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Itineraries",
                table: "Itineraries");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DepartureDates",
                table: "DepartureDates");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "18f677b1-e651-4002-80ee-e0fb487bf93f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1eae9f78-75ec-4996-a1c5-9649591ca723");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8652e6d3-7fbb-40bf-ae67-072c5499c9cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bb7d159-7e2d-49d3-a3d8-58c7786ac54b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4673085-9d1e-428c-9f88-d800c9d60da7");

            migrationBuilder.RenameTable(
                name: "Itineraries",
                newName: "Itinerary");

            migrationBuilder.RenameTable(
                name: "DepartureDates",
                newName: "DepartureDate");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Itinerary",
                table: "Itinerary",
                columns: new[] { "TourId", "Day" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_DepartureDate",
                table: "DepartureDate",
                columns: new[] { "TourId", "DepartureDay" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "15ace81f-68f4-4973-9ee1-d333e9bf0caf", null, "TourManager", "Tour Manager" },
                    { "6699e8d7-cc90-4a18-ab77-ee51652b8b15", null, "HotelManager", "Hotel Manager" },
                    { "810ce20c-1b35-4668-95e4-9c6c6e027e0c", null, "Customer", "Customer" },
                    { "bd5fdeaa-4308-4df4-83bf-17a7ac113b42", null, "Admin", "Admin" },
                    { "f33ecfb3-37b1-4032-95f3-a0183df4740a", null, "FlightManager", "Flight Manager" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_DepartureDate_Tours_TourId",
                table: "DepartureDate",
                column: "TourId",
                principalTable: "Tours",
                principalColumn: "TourId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Itinerary_Tours_TourId",
                table: "Itinerary",
                column: "TourId",
                principalTable: "Tours",
                principalColumn: "TourId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
