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
        public virtual DbSet<Tour> Tours { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Itinerary> Itineraries { get; set; }
        public virtual DbSet<TourImage> TourImages { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<DepartureDate> DepartureDates { get; set; }
        public virtual DbSet<PassengerInfomation> PassengerInfomations { get; set; }
        public virtual DbSet<TourTypes> TourTypes { get; set; }
        public virtual DbSet<BookTour> BookTours { get; set; }
        public virtual DbSet<PassengerType> PassengerTypes { get; set; }
        public virtual DbSet<Region> Regions { get; set; }
        public virtual DbSet<PaymentMethod> PaymentMethods { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Cấu hình quan hệ giữa Tour và Itinerary
            modelBuilder.Entity<Itinerary>()
                .HasKey(i => new { i.TourId, i.Day }); // Khóa chính hỗn hợp
            
            modelBuilder.Entity<Itinerary>();


            // Cấu hình quan hệ giữa Tour và Location (DepartureLocation)
            modelBuilder.Entity<Tour>()
                .HasOne(t => t.DepartureLocation)
                .WithMany(l => l.DepartureTours)
                .HasForeignKey(t => t.DepartureLocationId)
                .OnDelete(DeleteBehavior.Restrict); // Xóa địa điểm không xóa tour

            // Cấu hình quan hệ giữa Tour và Location (DestinationLocation)
            modelBuilder.Entity<Tour>()
                .HasOne(t => t.DestinationLocation)
                .WithMany(l => l.DestinationTours)
                .HasForeignKey(t => t.DestinationLocationId)
                .OnDelete(DeleteBehavior.Restrict); // Xóa địa điểm không xóa tour

            modelBuilder.Entity<DepartureDate>()
            .HasKey(od => new { od.TourId, od.DepartureDay });

            // Cấu hình quan hệ nhiều-nhiều giữa Tour và Image
            modelBuilder.Entity<TourImage>()
                .HasKey(ti => new { ti.TourId, ti.ImageId }); // Khóa chính hỗn hợp

            modelBuilder.Entity<TourImage>()
                .HasOne(ti => ti.Tour)
                .WithMany(t => t.TourImages)
                .HasForeignKey(ti => ti.TourId)
                .OnDelete(DeleteBehavior.Restrict); // Xóa tour không xóa ảnh

            modelBuilder.Entity<TourImage>()
                .HasOne(ti => ti.Image)
                .WithMany(i => i.TourImages)
                .HasForeignKey(ti => ti.ImageId)
                .OnDelete(DeleteBehavior.Restrict);

            // Cấu hình quan hệ nhiều-nhiều giữa AppUser và Review
            modelBuilder.Entity<Review>()
                .HasKey(r => new { r.AppUserId, r.TourId }); // Khóa chính hỗn hợp
            
            modelBuilder.Entity<PassengerInfomation>()
                .HasKey(pi => new { pi.PassengerInfomationId });

            modelBuilder.Entity<TourTypes>()
                .HasKey(tt => new { tt.TourTypeId });


            // danh sách các role mà chúng ta sẽ tạo khi chúng ta tạo migration
            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole { Name = "Customer", NormalizedName = "CUSTOMER" },
                new IdentityRole { Name = "TourManager", NormalizedName = "TOURMANAGER" },
                new IdentityRole { Name = "HotelManager", NormalizedName = "HOTELMANAGER" },
                new IdentityRole { Name = "FlightManager", NormalizedName = "FLIGHTMANAGER" },
                new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" }
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
    }
}