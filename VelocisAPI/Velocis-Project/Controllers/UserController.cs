using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Velocis_Project.Models;

namespace Velocis_Project.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]
        public class UserController : ControllerBase
        {
            private readonly AddContext _addContext;

            public UserController(AddContext addContext)
            {
            _addContext = addContext;
            }

            [HttpGet]
            [Route("GetUsers")]
            public async Task<IEnumerable<UserModel>> GetUsers()
            {
                return await _addContext.userDetails.ToListAsync();
            }

            [HttpPost]
            [Route("AddUser")]
            public async Task<UserModel> AddUser(UserModel objUser)
            {
                _addContext.userDetails.Add(objUser);
                await _addContext.SaveChangesAsync();
                return objUser;
            }

            [HttpPatch]
            [Route("UpdateUser/{id}")]
            public async Task<UserModel> UpdateUser(UserModel objUser)
            {
                _addContext.Entry(objUser).State = EntityState.Modified;
                await _addContext.SaveChangesAsync();
                return objUser;
            }

            [HttpDelete]
            [Route("DeleteUser/{id}")]
            public bool DeleteUser(int id)
            {
                bool a = false;
                var user = _addContext.userDetails.Find(id);
                if (user != null)
                { 
                    a = true;
                _addContext.Entry(user).State = EntityState.Deleted;
                _addContext.SaveChanges();
                }
                else
                {
                    a = false;
                }
                return a;

            }

        }
    }
