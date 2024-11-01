using be_booktour.Models;

namespace be_booktour.Interfaces
{
    public interface IImageRepository
    {
        Task<bool> ImageExistsAsync(int id);
        Task<List<Image>> GetImagesAsync();
        Task<Image> SaveImageAsync(Image image);
        Task<Image> GetImageByIdAsync(int id);
        Task<bool> DeleteImageAsync(Image image);
    }
}