import DepartmentStaffBO from './DepartmentStaffBO'


export default class DepartmentTreeBO {

  /**
   * 子级部门
   */
    public childDepartment!: DepartmentTreeBO[]

  /**
   * 部门名称
   */
    public departmentName!: string

  /**
   * 部门下的员工
   */
    public departmentStaffs!: DepartmentStaffBO[]

  /**
   * 部门ID
   */
    public id!: number

  /**
   * -
   */
    public path!: string

}
