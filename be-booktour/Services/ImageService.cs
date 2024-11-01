using be_booktour.Data;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.EntityFrameworkCore;

namespace be_booktour.Services
{
    public class ImageService : IImageRepository
    {
        private readonly ApplicationDbContext _context;

        public ImageService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> DeleteImageAsync(Image image)
        {
            using(var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    _context.Images.Remove(image);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return true;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    return false;
                }
            }
        }


        public async Task<Image> GetImageByIdAsync(int id)
        {
            return await _context.Images.FindAsync(id);
        }

        public async Task<List<Image>> GetImagesAsync()
        {
            return await _context.Images.ToListAsync();
        }

        public async Task<bool> ImageExistsAsync(int id)
        {
            return await _context.Images.AnyAsync(i => i.ImageId == id);
        }


        public async Task<Image> SaveImageAsync(Image image)
        {
            using(var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    await _context.Images.AddAsync(image);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return image;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    return null;
                }
            }
        }

    }
}