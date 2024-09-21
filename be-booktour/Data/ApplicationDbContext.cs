using be_booktour.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }
        // public DbSet<Product> Products { get; set; }
        // public DbSet<Category> Categories { get; set; }
        // public DbSet<Color> Colors { get; set; }
        // public DbSet<Unit> Units { get; set; }
        // public DbSet<Assess> Assesses { get; set; }
        // public DbSet<Cart> Carts { get; set; }
        // public DbSet<Order> Orders { get; set; }
        // public DbSet<OrderDetail> OrderDetails { get; set; }
        // public DbSet<Favourite> Favourites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // modelBuilder.Entity<OrderDetail>().HasKey(p => new { p.OrderId, p.ProductId });

            // modelBuilder.Entity<OrderDetail>()
            //     .HasOne(p => p.Order)
            //     .WithMany(u => u.OrderDetails)
            //     .HasForeignKey(p => p.OrderId);

            // modelBuilder.Entity<OrderDetail>()
            //     .HasOne(p => p.Product)
            //     .WithMany(s => s.OrderDetails)
            //     .HasForeignKey(p => p.ProductId);
                
            // danh sách các role mà chúng ta sẽ tạo khi chúng ta tạo migration
            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole { Name = "Customer", NormalizedName = "Customer" },
                new IdentityRole { Name = "TourManager", NormalizedName = "Tour Manager" },
                new IdentityRole { Name = "HotelManager", NormalizedName = "Hotel Manager" },
                new IdentityRole { Name = "FlightManager", NormalizedName = "Flight Manager" },
                new IdentityRole { Name = "Admin", NormalizedName = "Admin" }
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
    }
}