using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Velocis_Project.Models
{
    public class AddContext : DbContext
    {
        public AddContext(DbContextOptions<AddContext> options) : base(options)
        {
        }
        public DbSet<UserModel> userDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=LAPTOP-GP4US0VG\\SA;Initial Catalog=VelocisProject; User ID=sa;Password=8118");
        }

    }
}
